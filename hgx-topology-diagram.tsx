import React, { useState } from 'react';
import { Server, Network, HardDrive, Cpu, Database, Shield, Zap, Activity } from 'lucide-react';

const TopologyDiagram = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const componentDetails = {
    'gpu-server': {
      title: 'HGX B300 GPU Sunucusu (8 Adet)',
      specs: [
        '8x Nvidia B300 SXM GPU',
        '2x Intel Xeon 6 (≥64 core, ≥2.2 GHz)',
        '≥4TB DDR5-6400 ECC RAM',
        '2x 960GB NVMe M.2 (RAID 1)',
        '4x ≥15TB PCIe 5.0 NVMe',
        '8x 800Gbps XDR InfiniBand',
        'N+1 PSU ≥3200W',
        'GPUDirect Storage'
      ]
    },
    'mgmt-server': {
      title: 'Yönetim Sunucusu (5 Adet)',
      specs: [
        '2x Intel Xeon 6 (≥96 core, ≥2.0 GHz)',
        '≥4TB DDR5-6400 ECC RAM',
        '2x 960GB NVMe M.2 (RAID 1)',
        '4x ≥5TB PCIe 5.0 NVMe',
        '4x 200Gbps NDR InfiniBand',
        'N+N PSU',
        'BMC/iDRAC/iLO'
      ]
    },
    'service-server': {
      title: 'Hizmet Sunucusu (3 Adet)',
      specs: [
        '2x Intel Xeon 6 (≥96 core, ≥2.0 GHz)',
        '≥4TB DDR5-6400 ECC RAM',
        '2x 960GB NVMe M.2 (RAID 1)',
        '4x ≥5TB PCIe 5.0 NVMe',
        '4x 200Gbps NDR InfiniBand',
        'N+N PSU',
        'Scratch Storage'
      ]
    },
    'ib-switch': {
      title: 'InfiniBand Switch (≥2 Adet - Spine)',
      specs: [
        '≥32x 400Gbps NDR Portları',
        'Mellanox/Nvidia Quantum-2',
        'Adaptive Routing',
        'Congestion Control',
        'SHARP Protocol',
        'Yönetilebilir'
      ]
    },
    'storage-switch': {
      title: 'Depolama/Yönetim Switch (≥2 Adet)',
      specs: [
        '≥64x 100GbE (QSFP28)',
        'Yönetilebilir Ethernet',
        'Depolama Trafiği',
        'Yönetim Trafiği',
        'Yüksek Throughput'
      ]
    },
    'oob-switch': {
      title: 'OOB Yönetim Switch (≥2 Adet)',
      specs: [
        '≥48x 1GbE RJ45',
        '≥4x 100GbE QSFP28 Uplink',
        'BMC/iDRAC Erişimi',
        'Out-of-Band Management',
        'Yönetilebilir'
      ]
    },
    'storage': {
      title: 'All-Flash Array Depolama',
      specs: [
        '≥300 TiB Net Kapasite',
        'TLC NVMe SSD',
        '≥130 GB/s Throughput',
        '≥1M IOPS',
        '<1ms Gecikme',
        '2x Kontrol Ünitesi (HA)',
        'RDMA, GPUDirect Storage',
        'NFS, S3, iSCSI, NVMe-oF'
      ]
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 mb-6 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2">HGX B300 Sistem Topolojisi</h1>
          <p className="text-blue-100">Adalet Bakanlığı - UYAP Bilişim Sistemi | Nvidia BasePOD Referans Mimarisi</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded p-3">
              <div className="text-blue-200 text-sm">Toplam Sunucu</div>
              <div className="text-2xl font-bold text-white">16 Adet</div>
            </div>
            <div className="bg-white/10 rounded p-3">
              <div className="text-blue-200 text-sm">Toplam GPU</div>
              <div className="text-2xl font-bold text-white">64x B300</div>
            </div>
            <div className="bg-white/10 rounded p-3">
              <div className="text-blue-200 text-sm">Depolama</div>
              <div className="text-2xl font-bold text-white">≥300 TiB</div>
            </div>
          </div>
        </div>

        {/* Main Topology */}
        <div className="grid grid-cols-12 gap-4">
          
          {/* Left Section - GPU Servers */}
          <div className="col-span-4 space-y-4">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="text-white" size={24} />
                <h2 className="text-xl font-bold text-white">HGX B300 GPU Sunucuları</h2>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    onClick={() => setSelectedComponent('gpu-server')}
                    className="bg-white/20 hover:bg-white/30 rounded p-3 cursor-pointer transition-all transform hover:scale-105"
                  >
                    <div className="flex items-center gap-2">
                      <Server className="text-purple-200" size={20} />
                      <div className="text-white font-semibold">GPU Server #{num}</div>
                    </div>
                    <div className="text-xs text-purple-100 mt-1">8x B300 | 800Gbps XDR IB</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2 bg-purple-900/50 rounded text-purple-100 text-xs">
                • 5. Nesil NVLink/NVSwitch<br/>
                • GPUDirect Storage<br/>
                • N+1 Redundant PSU
              </div>
            </div>
          </div>

          {/* Center Section - Network */}
          <div className="col-span-4 space-y-4">
            {/* InfiniBand Network */}
            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Network className="text-white" size={24} />
                <h2 className="text-lg font-bold text-white">Yüksek Hızlı Ağ</h2>
              </div>
              <div className="space-y-2">
                {[1, 2].map((num) => (
                  <div
                    key={num}
                    onClick={() => setSelectedComponent('ib-switch')}
                    className="bg-white/20 hover:bg-white/30 rounded p-3 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Activity className="text-orange-200" size={18} />
                      <div className="text-white font-semibold text-sm">IB Switch #{num}</div>
                    </div>
                    <div className="text-xs text-orange-100">32x 400Gbps NDR</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-orange-100 mt-2 p-2 bg-orange-900/50 rounded">
                Quantum-2 | Adaptive Routing
              </div>
            </div>

            {/* Storage Network */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Network className="text-white" size={24} />
                <h2 className="text-lg font-bold text-white">Depolama/Yönetim Ağı</h2>
              </div>
              <div className="space-y-2">
                {[1, 2].map((num) => (
                  <div
                    key={num}
                    onClick={() => setSelectedComponent('storage-switch')}
                    className="bg-white/20 hover:bg-white/30 rounded p-3 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Database className="text-green-200" size={18} />
                      <div className="text-white font-semibold text-sm">Eth Switch #{num}</div>
                    </div>
                    <div className="text-xs text-green-100">64x 100GbE QSFP28</div>
                  </div>
                ))}
              </div>
            </div>

            {/* OOB Network */}
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="text-white" size={24} />
                <h2 className="text-lg font-bold text-white">OOB Yönetim Ağı</h2>
              </div>
              <div className="space-y-2">
                {[1, 2].map((num) => (
                  <div
                    key={num}
                    onClick={() => setSelectedComponent('oob-switch')}
                    className="bg-white/20 hover:bg-white/30 rounded p-3 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="text-slate-200" size={18} />
                      <div className="text-white font-semibold text-sm">OOB Switch #{num}</div>
                    </div>
                    <div className="text-xs text-slate-100">48x 1GbE + 4x 100GbE</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Management & Storage */}
          <div className="col-span-4 space-y-4">
            {/* Management Servers */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Server className="text-white" size={24} />
                <h2 className="text-lg font-bold text-white">Yönetim Sunucuları</h2>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    onClick={() => setSelectedComponent('mgmt-server')}
                    className="bg-white/20 hover:bg-white/30 rounded p-2 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Server className="text-blue-200" size={16} />
                      <div className="text-white text-sm font-semibold">Mgmt Server #{num}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-blue-100 mt-2 p-2 bg-blue-900/50 rounded">
                96 core | 4TB RAM | 200Gbps IB
              </div>
            </div>

            {/* Service Servers */}
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="text-white" size={24} />
                <h2 className="text-lg font-bold text-white">Hizmet Sunucuları</h2>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    onClick={() => setSelectedComponent('service-server')}
                    className="bg-white/20 hover:bg-white/30 rounded p-2 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Server className="text-cyan-200" size={16} />
                      <div className="text-white text-sm font-semibold">Service Server #{num}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage System */}
            <div className="bg-gradient-to-br from-yellow-600 to-amber-700 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <HardDrive className="text-white" size={24} />
                <h2 className="text-lg font-bold text-white">All-Flash Storage</h2>
              </div>
              <div
                onClick={() => setSelectedComponent('storage')}
                className="bg-white/20 hover:bg-white/30 rounded p-3 cursor-pointer transition-all"
              >
                <div className="text-white font-semibold">AFA System</div>
                <div className="text-xs text-yellow-100 mt-2">
                  • ≥300 TiB Net Capacity<br/>
                  • ≥130 GB/s | ≥1M IOPS<br/>
                  • 2x HA Controllers<br/>
                  • GPUDirect Storage
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Info */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-yellow-300" size={20} />
              <h3 className="text-white font-bold">Altyapı</h3>
            </div>
            <div className="text-indigo-100 text-sm space-y-1">
              <div>• 9x 42U Kabinet</div>
              <div>• Yedekli PDU</div>
              <div>• Hava Soğutmalı</div>
              <div>• Etiketli Kablolama</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="text-pink-200" size={20} />
              <h3 className="text-white font-bold">Güvenlik</h3>
            </div>
            <div className="text-pink-100 text-sm space-y-1">
              <div>• Gizlilik Sözleşmesi</div>
              <div>• Disk İade YOK</div>
              <div>• Uzaktan Erişim YOK</div>
              <div>• ISO 27001</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Database className="text-teal-200" size={20} />
              <h3 className="text-white font-bold">Lisanslar</h3>
            </div>
            <div className="text-teal-100 text-sm space-y-1">
              <div>• Nvidia Enterprise AI</div>
              <div>• 5 Yıl LTS Destek</div>
              <div>• Her GPU İçin Lisans</div>
              <div>• Merkezi Yönetim</div>
            </div>
          </div>
        </div>

        {/* Details Panel */}
        {selectedComponent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50" onClick={() => setSelectedComponent(null)}>
            <div className="bg-slate-800 rounded-lg p-6 max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-white mb-4">{componentDetails[selectedComponent].title}</h3>
              <div className="space-y-2">
                {componentDetails[selectedComponent].specs.map((spec, idx) => (
                  <div key={idx} className="bg-slate-700 rounded p-3 text-slate-100">
                    • {spec}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="bg-slate-800 rounded-lg p-4 mt-6 shadow-xl">
          <h3 className="text-white font-bold mb-3">Bağlantı Tipleri</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-orange-300">🔶 800Gbps XDR InfiniBand (GPU Sunucular)</div>
            <div className="text-red-300">🔶 400Gbps NDR InfiniBand (Spine Switches)</div>
            <div className="text-blue-300">🔶 200Gbps NDR InfiniBand (Yönetim/Hizmet)</div>
            <div className="text-green-300">🔶 100GbE Ethernet (Depolama/Yönetim)</div>
            <div className="text-slate-300">🔶 1GbE RJ45 (OOB Yönetim)</div>
            <div className="text-yellow-300">🔶 NVMe-oF, RDMA (Depolama)</div>
          </div>
        </div>

        {/* SLA Times */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-4 mt-6 shadow-xl">
          <h3 className="text-white font-bold mb-3">Garanti SLA Süreleri</h3>
          <div className="grid grid-cols-4 gap-3 text-sm text-white">
            <div className="bg-white/10 rounded p-2">
              <div className="font-bold">Derece 1</div>
              <div className="text-xs">2h müdahale | 6h çözüm</div>
            </div>
            <div className="bg-white/10 rounded p-2">
              <div className="font-bold">Derece 2</div>
              <div className="text-xs">4h müdahale | 12h çözüm</div>
            </div>
            <div className="bg-white/10 rounded p-2">
              <div className="font-bold">Derece 3</div>
              <div className="text-xs">6h müdahale | 24h çözüm</div>
            </div>
            <div className="bg-white/10 rounded p-2">
              <div className="font-bold">Donanım</div>
              <div className="text-xs">20 gün değişim</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopologyDiagram;